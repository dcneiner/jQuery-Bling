# jQuery: Nuts, Bolts and Bling – Live Coding Source Code

This code was used in the jQuery: Nuts, Bolts and Bling presentation delivered at
[Front End Design Conference](http://frontenddesignconference.com) in St. Petersburg, FL.

**Important!** Because we are using AJAX, you cannot run this at the `file://` protocol in some browsers. To run this code you need to run it at `http://`. The easiest way to do this is to upload it to a personal website and play with it there. The next easiest (If you are on a Mac), is to open Terminal and navigate to the directory where this file lives. Then run:

    python -m SimpleHTTPServer

Then point your browser to [http://0.0.0.0:8000](http://0.0.0.0:8000) and try out the files.

Most of this code was revealed during the live coding session. Only the result remains in this
source code format (With the exception of some of the steps used in the `doTimeout` section). Here are a few notes about the concepts presented:

## jQuery Mockjax

We use the [Mockjax](http://code.appendto.com/plugins/jquery-mockjax) plugin to fake a request
to the [Dribbble API](http://dribbble.com/api) and return test data.

The process for generating our test data file (`mocks/johnneiner.js`) was:

1. Visit the API endpoint on the Dribbble api, in this case: `http://api.dribbble.com/players/johnneiner/shots`
2. Save this file as `mocks/johnneiner.js`
3. Open the file and add `var johnneiner = ` to the beginning, and `;` at the end.
4. Include this new js file on our page with our mocks

*We are simulating a cross domain request and I ran into some issues using the normal mockjax `proxy` method, so I took this approach instead. If I find a better workaround, or mockjax is updated to make this easier, I will try to update this repository to reflect that.*

Then, you add the code found in `mocks/mocks.js`

To test that our fake data works like the real data, simply remove the three mock `<script>` tags from `index.html`.

## jQuery Tmpl

The point of showing [this plugin](https://github.com/jquery/jquery-tmpl) was not to say this is the end-all of templating libraries for JS, but instead to show the concept of separating HTML from JavaScript in a clear way. This code is also in its final state from the presentation, but you can see the important pieces in the `script#shot-template` in `index.html`, and also in the first section of code in `js/script.js`.

## jQuery doTimeout

Ben Alman's [jQuery.doTimeout] plugin makes dealing with timers almost effortless. During the live coding session, we looked at how to implement this plugin to get some great results.

If you want to follow along on the progression we took during the live coding session, visit the bottom of `js/script.js` and one by one uncomment `first_try`, `second_try`, etc. Be sure to only have one uncommented at a time. Don't leave `first_try` and `third_try` running at the same time, for instance.

`final_try` is of course the final working interaction. The comments in the `script.js` file explain about the expected interactions at each stage, and any problems you might see during that time.


## Font License

Please see the `SIL Open Font License 1.1.txt` file in the `fonts/ostrich-sans-fontfacekit` directory for information on the license for the Ostrich Sans web font used in this project. `@font-face` kit used was downloaded from [Font Squirrel](http://fontsquirrel.com).

## Included Libraries and Assets
* Website theme built on a stripped down version of [HTML5 Boilerplate](http://html5boilerplate.com)
* [Modernizr](http://modernizr.com)
* [jQuery](http://jquery.com)
* [jQuery Mockjax](http://code.appendto.com/plugins/jquery-mockjax)
* [jQuery doTimeout](http://benalman.com/projects/jquery-dotimeout-plugin/)
* [jQuery Tmpl](https://github.com/jquery/jquery-tmpl)

## Code License (MIT)

All code not mentioned in the **Font** or **Included Libraries** section (excluding the data returned from the Dribbble API) uses the following license:

Copyright (c) 2011 Douglas C. Neiner

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.