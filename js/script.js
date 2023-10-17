$(document).ready(function() {
    maskField()
    checkSize()
})
$(window).resize(function() {
    checkSize()
})
// href
$("body").on('click', '[href*="#"]', function (e) {
	var fixed_offset = 0;
	$('html,body').stop().animate({
		scrollTop: $(this.hash).offset().top - fixed_offset
	}, 1000);
	e.preventDefault();
});

new Swiper(".mainSlider", {
    slidesPerView: 1.2,
    spaceBetween: 25,
    centeredSlides: true,
    loop: true,
    navigation: {    
      nextEl: ".mainSlider .swiper-button-next",
      prevEl: ".mainSlider .swiper-button-prev",
    },
});
new Swiper(".newProductSlider", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    navigation: {    
      nextEl: ".newProductSection .swiper-button-next",
      prevEl: ".newProductSection .swiper-button-prev",
    },
});
new Swiper(".popularProductSlider", {
    slidesPerView: 4,
    spaceBetween: 25,
    loop: true,
    navigation: {    
      nextEl: ".popularProductSection .swiper-button-next",
      prevEl: ".popularProductSection .swiper-button-prev",
    },
});
new Swiper(".blogSlider", {
    slidesPerView: 1.1,
    spaceBetween: 25,
    loop: true,
    centeredSlides: true,
    navigation: {    
      nextEl: ".blogSection .swiper-button-next",
      prevEl: ".blogSection .swiper-button-prev",
    },
});

$(document).on('click', '.checkField', function (el) {
  el.preventDefault();
  checkField(el)
})
function checkField(el) {
    let field = $(el.target).parents('form').find('input, textarea, select'),
        rating = $(el.target).parents('form').find('.rating-mini')

    for (let i = 0; i < field.length; i++) {
        if (!$(field[i]).hasClass('no-r')) {
            if ($(field[i]).val() != null) {
                if ($(field[i]).val() != '') {
                    if ($(field[i]).attr('type') == 'phone' || $(field[i]).hasClass('phone') || $(field[i]).attr('id') == 'phone' || $(field[i]).attr('name') == 'phone') {
                        if ($(field[i]).val().length < 17) {
                            $(field[i]).addClass('error')
                        } else {
                            $(field[i]).removeClass('error')
                        }
                    } else {
                        $(field[i]).removeClass('error')
                    }
                    if ($(field[i]).attr('type') == 'radio') {
                        if (!$(field[i]).hasClass('secondary')) {
                            let inputName = $(field[i]).attr('name'),
                                inputCheckedAll = $(el.target).parents('form').find(`input[name='${inputName}']`),
                                inputChecked = $(el.target).parents('form').find(`input[name='${inputName}']:checked`)
                            if (inputChecked.length == 0) {
                                inputCheckedAll.addClass('error')
                            } else {
                                inputCheckedAll.removeClass('error')
                            }
                        }
                    } else {
                        if (!$(field[i]).hasClass('gocity')) {
                            $(field[i]).removeClass('error')
                        } else {
                            let t=0
                            for (let j=0; j<$(field[i]).parents('.form-group-auto-row').find('.list.list-directions ul li').length; j++) {
                                if (t=0) {
                                    if ($(field).eq(i).val() != $(field).eq(i).parents('.form-group-auto-row').find('.list.list-directions ul li').eq(j).text()) {
                                        $(field).eq(i).addClass('error')
                                    } else {
                                        $(field).eq(i).removeClass('error')
                                        t++
                                    }
                                }                                
                            }
                        }
                    }
                    if ($(field[i]).attr('type') == 'checkbox') {
                        if (!$(field[i]).hasClass('secondary')) {
                            let inputName = $(field[i]).attr('name'),
                                inputCheckedAll = $(el.target).parents('form').find(`input[name='${inputName}']`),
                                inputChecked = $(el.target).parents('form').find(`input[name='${inputName}']:checked`)
                            if (inputChecked.length == 0) {
                                inputCheckedAll.addClass('error')
                            } else {
                                inputCheckedAll.removeClass('error')
                            }
                        }
                    } else {
                        if (!$(field[i]).hasClass('gocity')) {
                            $(field[i]).removeClass('error')
                        } else {
                            let t=0
                            for (let j=0; j<$(field[i]).parents('.form-group-auto-row').find('.list.list-directions ul li').length; j++) {
                                if (t=0) {
                                    if ($(field).eq(i).val() != $(field).eq(i).parents('.form-group-auto-row').find('.list.list-directions ul li').eq(j).text()) {
                                        $(field).eq(i).addClass('error')
                                    } else {
                                        $(field).eq(i).removeClass('error')
                                        t++
                                    }
                                }                                
                            }
                        }
                    }
                    if ($(field[i]).attr('type') == 'email') {
                        if (isValidEmail($(field[i]).val())) {
                            $(field[i]).removeClass('error')
                        } else {
                            $(field[i]).addClass('error')
                        }
                    }
                } else {
                    $(field[i]).addClass('error')
                }
            } else {
                $(field[i]).addClass('error')
            }
        } else {
            if ($(field[i]).attr('type') == 'email' && $(field[i]).val() != '') {
                if (isValidEmail($(field[i]).val())) {
                    $(field[i]).removeClass('error')
                } else {
                    $(field[i]).addClass('error')
                }
            } else {
                if (!$(field[i]).hasClass('gocity')) {
                    $(field[i]).removeClass('error')
                } else {
                    let t=0
                    for (let j=0; j<$(field[i]).parents('.form-group-auto-row').find('.list.list-directions ul li').length; j++) {
                        if (t=0) {
                            if ($(field).eq(i).val() != $(field).eq(i).parents('.form-group-auto-row').find('.list.list-directions ul li').eq(j).text()) {
                                $(field).eq(i).addClass('error')
                            } else {
                                $(field).eq(i).removeClass('error')
                                t++
                            }
                        }                                
                    }
                }
            }
        }
    }
    if ($(el.target).parents('form').hasClass('form-main')) {
        for (let i=0;i<$('form.form-main .accordion .accordion-item').length;i++) {
            if ($('form.form-main .accordion .accordion-item').eq(i).find('.error').length != 0) {
                $('form.form-main .accordion .accordion-item').eq(i).addClass('error-block')
            }
            else {
                $('form.form-main .accordion .accordion-item').eq(i).removeClass('error-block')
            }
        }
    }
    if ($(rating).find('span.active').length == 0) {
        $(rating).addClass('error')
    } else {
        $(rating).removeClass('error')
    }
    if ($(el.target).parents('form').find('.error').length == 0) {
        sendAjax(field, el)
    }
}

function clearFields() {
    $('input:not([type=checkbox], [type=radio], [name=csrfmiddlewaretoken])').val('')
    $('textarea').val('')
    $('.__select__title').removeClass('error')
    $('input[type=checkbox]').prop('checked', false)
    $('input[type=radio]').prop('checked', false)
    $('form.form-main .accordion-body label img').removeClass('active')
}

function isValidEmail(email) {
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

function sendAjax(dataForm, el) {
    let obj = {},
        type = $(el.target).attr('data-request'),
        titleText = $('.modal#infoModal .modal-header'),
        bodyText = $('.modal#infoModal .modal-body'),
        link = $(el.target).attr('data-create')

    $.each(dataForm, function (i, el) {
        let name = $(el).attr('name'),
            value = $(el).val();
        if (obj[name] !== undefined) {
            if ($(el).is(':checked')) {
                obj[name] = value;
            }
        } else {
            if (value) {
                obj[name] = value;
            }
        }
    });
    $.ajax({
        url: `/api/${link}/`,
        method: "POST",
        headers: {
            'X-CSRFToken': csrftoken,
        },
        data: JSON.stringify(obj),
        dataType: 'json',
        contentType: 'application/json',
        success: function (response) {
            clearFields()
        },
        error: function (error) {
            console.log(error)
        }
    })
}

function maskField() {
    $(".mask-phone").click(function(){
      $(this).setCursorPosition(3);
    }).mask("+7(999) 999-9999");
    // $(".mask-phone").mask("+7 (999) 999-99-99");
    $('.mask-date').mask('99.99.9999');
}
$.fn.setCursorPosition = function(pos) {
  if ($(this).get(0).setSelectionRange) {
    $(this).get(0).setSelectionRange(pos, pos);
  } else if ($(this).get(0).createTextRange) {
    var range = $(this).get(0).createTextRange();
    range.collapse(true);
    range.moveEnd('character', pos);
    range.moveStart('character', pos);
    range.select();
  }
};

function checkSize() {

}

$(document).on('click', '.open-modal', function (el) {
    el.preventDefault()
    infoOpenModal(el)
})

function infoOpenModal(elem) {
    let type = $(elem.target).attr('data-type-modal'),
        titleText = $('.modal#infoModal .modal-header'),
        bodyText = $('.modal#infoModal .modal-body')
    titleText.html('')
    bodyText.html('')
    if (type == 'type-1') {
        titleText.html(`
            <div class="h1 _title36 modal-title" id="exampleModalLabel">Заказать обратный звонок</div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        `)
        bodyText.html(`
            <form class="application-block">
                <input type="phone" class="mask-phone" placeholder="Номер телефона" name="phone">
                <div class="desc">Нажимая кнопку “Отправить” вы даете согласие на обработку персональных данных</div>
                <div class="btn-block">
                    <div class="btn btnBlack checkField" data-create="feedback_request" data-request="success-modal">Отправить</div>
                </div>
            </form>
        `)
    }
    maskField()
    $('#infoModal').modal('show')
}

$('footer .logo').on('click', function () {
   test('zalupa', $(this))
})

function test (dataForm, el) {
    alert(dataForm);
}
$('form input').on('input', function() {
    
    // if ($(this).val().length > 0) {
    //     $(this).removeClass('error')
    // } else {
    //     $(this).addClass('error')
    // }
})