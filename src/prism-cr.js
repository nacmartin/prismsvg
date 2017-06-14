Prism.languages.jsx = Prism.languages.extend('jsx', {
    'cr': {
        pattern: /[\r\n]\s?/,
        greedy: true
    }
})

Prism.hooks.add('wrap', function(env) {

    if (env.type === 'cr') {
        env.attributes['dy'] = '1.4em';
        env.attributes['x'] = '0';
    }
});

Prism.hooks.add('wrap', function(env) {
    env.tag = 'tspan'
})
Prism.hooks.add('before-highlightall', function(env) {
    env.selector = 'text[class*="language-"]'
})
