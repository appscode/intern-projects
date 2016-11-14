const Backbone = require('backbone');
const $ = require('jquery');
Backbone.$ = $;
module.exports = Backbone.View.extend({
  el: '.container',
  addBookTemplate: 'add_book.html',
  render() {
    this.$el.html(global.nunjucksEnv.render(this.addBookTemplate));
  },
  events: {
    'submit #formId': 'upload'
  },
  upload() {
    // e.preventDefault();
    const fileData = document.getElementById('fileToUpload').files[0];
    const formData = new FormData();
    formData.append('fileToUpload', fileData);
    const ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
      if (this.readyState === 4 && this.status === 200) {
        document.getElementById('status').innerHTML = this.responseText;
      }
    };
    const val = '123.jpg';
    ajax.open('POST', 'http://localhost/file_upload_parser.php?id=' + val, true);
    ajax.send(formData);
  }
});
