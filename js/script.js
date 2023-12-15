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
    loop: true,
    navigation: {
      nextEl: ".blogSlider .swiper-button-next",
      prevEl: ".blogSlider .swiper-button-prev",
    },
});
new Swiper(".categorySlider", {
    slidesPerView: 9,
    loop: true,
    spaceBetween: 30,
    navigation: {
      nextEl: ".categoryMiniSection .swiper-button-next",
      prevEl: ".categoryMiniSection .swiper-button-prev",
    },
});


let pc_slider1 = new Swiper(".pc_slider1", {
    loop: true,
    spaceBetween: 2,
    slidesPerView: 5,
    mousewheel: true,
    direction: "vertical",
    freeMode: {
        enabled:true,
        sticky: true,
    },
    watchSlidesProgress: true,
  });
  let pc_slider2 = new Swiper(".pc_slider2", {
    spaceBetween: 10,
    mousewheel: true,
    thumbs: {
      swiper: pc_slider1,
    },
  });

$(document).ready(function() {
    $('.btn').click(function() {
      $('.filter-options').slideToggle();
      $('.btn-block').addClass('visible')
    });
  });

  new Swiper(".colorProductSlider", {
    slidesPerView: 6,
    spaceBetween: 2,
    freeMode: {
        enabled:true,
        sticky: true,
    },
});


$('.btn').on('click',function() {
    $('btn-block').removeClass('visible');
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
        clearFields()
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
            if (response.error) {
                $('.message').html(response.message)
            }
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
    if (type === 'type-1') {
        titleText.html(`
            <div class="modal-title center">Чтобы воспользоваться быстрым бронированием выполните вход или зарегистрируйтесь на сайте</div>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        `)
        bodyText.html(`
        <div class="info-block">
            <div class="item">
                <div class="name">Вход</div>
                <form class="application-block">
                    <label class="field">
                        <span>Номер телефона или email</span>
                        <input name="name_email" type="text">
                    </label>
                    <label class="field">
                        <span>Пароль</span>
                        <input name="password" type="password">
                    </label>
                    <div class="fb">
                        <div class="field-block">
                            <label class="checkbox-block">
                                <div class="checkbox">
                                    <input type="checkbox" id="check" >
                                    <div>
                                        <svg viewBox="0,0,50,50">
                                            <path d="M5 30 L 20 45 L 45 5"></path>
                                        </svg>
                                    </div>
                                </div>
                                <span>Запомнить меня</span>
                            </label>
                            <a href="#" class="recover-pass">Забыли пароль?</a>
                        </div>
                        <div class="btn checkField">Войти</div>
                    </div>
                </form>
            </div>
            <div class="item">
                <div class="name">Регистрация</div>
                <form class="application-block">
                    <label class="field">
                        <span>Имя*</span>
                        <input name="name" type="text">
                    </label>
                    <label class="field">
                        <span>Email</span>
                        <input name="email" type="text">
                    </label>
                    <label class="field">
                        <span>Номер телефона*</span>
                        <input name="phone" type="text" class="mask-phone">
                    </label>
                    <div class="fb">
                        <label class="checkbox-block">
                            <div class="checkbox">
                                <input type="checkbox" id="check" checked" name="rules">
                                <div>
                                    <svg viewBox="0,0,50,50">
                                        <path d="M5 30 L 20 45 L 45 5"></path>
                                    </svg>
                                </div>
                            </div>
                            <span>Вы соглашаетесь с правилами</span>
                        </label>
                        <div class="btn white border checkField">Зарегистрироваться</div>
                    </div>
                </form>
            </div>
        </div>
    `)
    }

    maskField()
    $('#infoModal').modal('show')
}

// $('footer .logo').on('click', function(elem) {
//     test('222', elem)
// })

// $('footer .logo').hover(function(elem) {
//     test('', $(this))
// })


// $(this) == $('footer .logo')


// function test(dataForm, el) {
//     // $(el).css({
//     //     'background-color': '#ffffff'
//     // })
//     $(el).animate({
//         marginLeft: '+=50px',
//         opacity: '+=0.25'
//     }, 1000)
// }

// $('form input').on('input', function() {
//     let s = $(this),
//         s_clear = $.trim($(s).val())

//     if (s_clear.length > 0) {
//         $(this).removeClass('error')
//     } else {
//         $(this).addClass('error')
//     }
// })
// $('form select').on('change', function() {
//     let value = $(this).val()

//     if (value > 5) {
//         console.log(1);
//     } else if (value == 1) {
//         console.log(3);
//     } else if (value == 'gdsgdfgdf') {
//         $(this).after('<div class="btn open-modal" data-type-modal="test">Open Modal</div>')
//     } else {
//         console.log(2);
//     }
// })

$(document).on('click', '[data-tab]', function() {
    let id = $(this).attr('data-tab'),
        content = $(this).parents('.tab-list').find(`.list ul[data-tab='${id}']`)
    $(this).parents('.tab-list').find(`.list ul.active`).removeClass('active')
    $(this).parents('.tab-list').find(`.name-block-main span.active`).removeClass('active')
    content.addClass('active')
    $(this).addClass('active')
})

let myMap

let myModalEl = document.getElementById('mapModal')
myModalEl.addEventListener('shown.bs.modal', function (event) {
    ymaps.ready(init);
})
myModalEl.addEventListener('hidden.bs.modal', function (event) {
    myMap.destroy()
})

async function init() {
    let center = [53.50425306146371, 49.300817274648665];
    let e;
    if ($("#map").data("coord")) {
        e = JSON.parse($("#map").data("coord").replace(/"/g, '\\"').replace(/'/g, '"').replace(/False/g, false).replace(/True/g, true).replace(/None/g, null));
    } else {
        e = '';
    }
    let all_branches = e;
    myMap = new ymaps.Map("map", {
        center: center,
        zoom: 5,
        controls: ['zoomControl'],
        minZoom: 8,
    });

    let clusterer = new ymaps.Clusterer({
        clusterDisableClickZoom: false,
        gridSize: 32,
    });

    let minLat = Number.MAX_VALUE;
    let maxLat = Number.MIN_VALUE;
    let minLng = Number.MAX_VALUE;
    let maxLng = Number.MIN_VALUE;

    for (let cityData of all_branches) {
        for (let point of cityData.points) {
            let coords = point.coordinate.split(',');
            let lat = parseFloat(coords[0]);
            let lng = parseFloat(coords[1]);
            clusterer.add(
                new ymaps.Placemark(coords, {
                    balloonContentHeader: `<span>Стоянка на ${point.address}</span>`,
                    balloonContentBody: `<span>Город: ${point.city}</span><br><span>Адрес: ${point.address}</span><br>${point.phone ? `<span>Телефон: <a href="tel:${point.phone}">${point.phone}</a></span>` : ''}`
                }, {
                    preset: 'islands#icon',
                    iconColor: '#0095b6'
                })
            );
            // Обновляем границы области с учетом текущей точки
            minLat = Math.min(minLat, lat);
            maxLat = Math.max(maxLat, lat);
            minLng = Math.min(minLng, lng);
            maxLng = Math.max(maxLng, lng);
        }
    }

    myMap.geoObjects.add(clusterer);

    if (clusterer.getGeoObjects().length > 1) {
        // Вычисляем оптимальный уровень приближения (zoom) для отображения всех точек
        myMap.setBounds([[minLat, minLng], [maxLat, maxLng]], {
            checkZoomRange: true, // Учитываем ограничения на максимальный и минимальный zoom
        });
    } else {
        let coords = clusterer.getGeoObjects()[0].geometry.getCoordinates();
        myMap.setZoom(14);
        myMap.setCenter(coords);
    }
}

$('.variants .item_a ul li').on('click',function() {
    let selectedOption = $(this).text();
    $(this).parents('.name').find('> span').text(selectedOption);
    $(this).parents('ul').find('li').removeClass('active');
    $(this).addClass('active');  
  });

$('.cardSection .item_a .mini-content .swiper .swiper-slide').on('click', function(){
    $(this).parents('.swiper').find('.swiper-slide').removeClass('active-color')
    $(this).addClass('active-color')

    let url = $(this).find('.img img').attr('src'),
    slide_main = $('.cardSection .info-block .item.slider .swiper.pc_slider1 .swiper-slide')
    $(slide_main).each(function(index, value) {
        if ($(value).find('img').attr('src') === url) {
            pc_slider1.slideTo($(value).attr('data-swiper-slide-index'))
            pc_slider2.slideTo($(value).attr('data-swiper-slide-index'))
        }
       
    })
})