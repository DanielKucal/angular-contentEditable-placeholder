# angular-contentEditable-placeholder
### `placeholder` support for `contentEditable="true"`

Aborted, simply place in your CSS:
```css
[contenteditable=true]:empty:before {
    content: attr(placeholder);
    display: block;
}
```
