// Runs the actual route with an in-memory email transport; never sends mail.
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const vm = require('node:vm');
const ts = require('typescript');

function loadRoute(fail = false) {
  const mail = [];
  const source = ts.transpileModule(readFileSync('src/app/api/contact/route.ts', 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 },
  }).outputText;
  const sandbox = {
    exports: {}, process: { env: {} },
    require(id) {
      if (id === '@/app/libs/email') return {
        sendEmail: async payload => { mail.push(payload); if (fail) throw new Error('mock SMTP failure'); },
      };
      return require(id);
    },
  };
  vm.runInNewContext(source, sandbox);
  return { post: body => sandbox.exports.POST(new Request('http://localhost/api/contact', {
    method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(body),
  })), mail };
}
const valid = {
  source: 'lead-web-site', page: '/leads/creare-site-web', name: 'Test local',
  email: 'local@example.test', phone: '', description: 'Un site pentru serviciile firmei.',
  message: 'Pachet selectat: Start Up Pro\nUn site pentru serviciile firmei.',
  company: '', budget: '', projectType: '',
};

for (const [label, overrides] of [
  ['blank name', { name: ' ' }], ['short name', { name: 'A' }],
  ['invalid email', { email: 'invalid' }], ['no contact', { email: '', phone: '' }],
  ['short phone', { email: '', phone: '123' }], ['long phone', { email: '', phone: '1'.repeat(16) }],
  ['invalid optional email with valid phone', { email: 'invalid', phone: '+40712345678' }],
  ['empty original description with long package summary', { description: '' }],
  ['short original description', { description: 'Scurt' }],
  ['oversized description', { description: 'x'.repeat(5001) }],
  ['oversized name', { name: 'x'.repeat(101) }], ['oversized company', { company: 'x'.repeat(201) }],
  ['oversized budget', { budget: 'x'.repeat(101) }], ['oversized project type', { projectType: 'x'.repeat(201) }],
  ['oversized summary', { message: 'x'.repeat(6001) }], ['non-string name', { name: {} }],
]) test(`rejects ${label} without sending mail`, async () => {
  const { post, mail } = loadRoute();
  const response = await post({ ...valid, ...overrides });
  assert.equal(response.status, 400);
  assert.equal(mail.length, 0);
  assert.equal(response.headers.get('set-cookie'), null);
});

for (const [label, overrides] of [
  ['email', {}], ['phone', { email: '', phone: '+40 (712) 345-678' }],
  ['maximum description', { description: 'x'.repeat(5000), message: 'Pachet selectat: Enterprise Pro\n' + 'x'.repeat(5000) }],
]) test(`accepts ${label} and creates confirmation only after mocked delivery`, async () => {
  const { post, mail } = loadRoute();
  const response = await post({ ...valid, ...overrides });
  assert.equal(response.status, 200);
  assert.equal((await response.json()).ok, true);
  assert.equal(mail.length, 1);
  assert.match(response.headers.get('set-cookie'), /wd_web_sites_ty=1/);
});

test('SMTP failure does not create a success cookie', async () => {
  const { post } = loadRoute(true);
  const response = await post(valid);
  assert.equal(response.status, 500);
  assert.equal(response.headers.get('set-cookie'), null);
});

test('HTML is escaped and package context survives', async () => {
  const { post, mail } = loadRoute();
  await post({ ...valid, name: '<b>Test</b>', message: valid.message + '\n<script>test</script>' });
  assert.match(mail[0].html, /&lt;b&gt;Test&lt;\/b&gt;/);
  assert.match(mail[0].html, /Start Up Pro/);
  assert.ok(!mail[0].html.includes('<script>'));
});

test('commerce caller retains its original contract without description', async () => {
  const { post, mail } = loadRoute();
  const response = await post({ name: 'Shop test', email: 'shop@example.test', message: 'Magazin online', source: 'lead-magazin-online' });
  assert.equal(response.status, 200);
  assert.equal(mail.length, 1);
  assert.match(response.headers.get('set-cookie'), /wd_online_store_ty=1/);
});
