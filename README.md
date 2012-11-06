# jquery-bounds

Compute and show the absolute bounds of an HTMLElement.

This version is adapted from Andrew Powell's [bounds function in jQuery UI](http://code.google.com/p/jquery-ui/source/browse/branches/labs/powella/coverslide/res/js/jquery/jquery.bounds.js?r=2698).

## Usage

```js
$('#some-element').bounds(); // {"left":8,"top":8,"right":30,"bottom":62}
$('#some-element').bounds().show(); // highlight bounds
```

- `$.fn.bounds([settings])`/`$.fn.boundsEach([settings])` with settings `{withPadding: BOOL, withMargin: BOOL}`.
- `Bounds>>show([ms])`.

Live example: <http://jsbin.com/enuyuc/1>