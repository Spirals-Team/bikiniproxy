# BikiniProxy 

BikiniProxy is a novel technique to provide self-healing for the web.
BikiniProxy is designed as an HTTP proxy that uses five self-healing strategies to rewrite buggy HTML and Javascript code.

[Fully Automated HTML and Javascript Rewriting for Constructing a Self-healing Web Proxy](https://arxiv.org/pdf/1803.08725) (Thomas Durieux, Youssef Hamadi and Martin Monperrus), ISSRE, 2018.

```bibtex
@inproceedings{durieux2018fully,
	author={Durieux, Thomas and Hamadi, Youssef and Monperrus, Martin},
	journal={Under submission},
	title={Fully Automated HTML and JavaScript Rewriting for Constructing a Self-healing Web Proxy},
	booktitle={Proceedings of the 29th IEEE International Symposium on Software Reliability Engineering (ISSRE)},
	organization={IEEE},
	year={2018},
}
```

## Self-healing Strategies

1. *HTTP/HTTPS Redirector* that changes HTTP URLs to HTTPS URLs.
2. *HTML Element Creator* that creates missing HTML elements.
3. *Library Injector* injects missing libraries in the page.
4. *Line Skipper* wraps a statement with an if to prevent invalid object access.
5. *Object Creator* initializes a variable with an empty object to prevent further null dereferences.

## DeadClick

DeadClick is a novel benchmark of JavaScript errors that are triggered in large production web applications.
This benchmark has been constructed with a unique methodology based crawling the web for finding errors and advanced proxying to ensure that those errors can be reliably reproduced.
The final benchmark contains 555 JavaScript reproducible production errors.

See [DeadClick/README.me](https://github.com/Spirals-Team/bikiniproxy/tree/master/DeadClick) to have more details

## Example 

![bikiniproxy](https://user-images.githubusercontent.com/5577568/37277161-3516e9a4-25e4-11e8-9f15-9eb08047b6fb.gif)



## License

MIT License
