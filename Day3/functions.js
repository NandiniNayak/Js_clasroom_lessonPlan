var name = "nands";
function a() {
  let name = "alex";
  console.log(`my first function ${name}`); //alex
  b();

}
function b() {
    console.log(`my first function ${name}`); //nands
}
a();
console.log(`value of name globally: ${name}`); //nands


(function ($, w, d) {

}(jQuery,window,document));
