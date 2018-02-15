function Button(text) {
    this.text = text || 'Hello';
}

Button.prototype ={
    create: function() {
        var self = this;
        this.$eleent = $('<button>');
        this.$eleent.text(this.text);
        this.$eleent.click(function() {
            alert(self.text);
        });
        $('body').append(this.$eleent);
    }
}
var btn1 = new Button('Hello!');

btn1.create();