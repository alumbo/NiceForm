class NiceForm {
    
    constructor() {
        this.initInputs();
    }
    
    initInputs() {
        $('.input').each((index, input)=>{
            const $input = $(input).find('input');
            const label = $input.attr('placeholder');
            $(input).attr('data-label-content', label);
            $input.on('focus', this.inputFocus.bind(this));
            $input.on('blur', this.inputBlur.bind(this));
            $input.on('change keydown keyup', this.inputChange.bind(this));
        });
    } 

    inputFocus(event) {
        const $input = $(event.currentTarget);
        $input.closest('.input').addClass('has-focus');
    }
    
    inputBlur(event) {
        const $input = $(event.currentTarget);
        $input.closest('.input').removeClass('has-focus');
    }

    inputChange(event) {
        const $input = $(event.currentTarget);
        if($input.val() ==='') {
            $input.closest('.input').removeClass('has-content');
        }
        else {
            $input.closest('.input').addClass('has-content');
        }
    }

}
$(() => {
    new NiceForm();
});