# prismsvg
Prismjs tweaked to output SVGs.

This is a somewhat dirty adaptation of (Prism.js)[http://prismjs.com/] to be able to output SVGs.

```
    <svg height="3em" width="400" >
        <text y="20" class="language-jsx"
          Your source code here
        >
        </text>
    </svg>
```

And this will output a bunch of tspan nodes with the right classes.

This package includes also a css file with the light solarized theme adapted to work with SVGs.

I have copy&pasted the languages that I needed from Prism.js. It should be easy to use your own
languages as long as you keep calling `prismsvg.js` and `prism-cr.js`.

I don't know if this is useful for somebody else, so I have just done what I needed. If you want to 
use this and your use case is not supported, feel free to open an issue. Thanks.
