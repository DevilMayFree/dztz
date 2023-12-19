$(window).scroll(function () {
    if ($(this).scrollTop() > 140) {
        $("#mbmcpebul_wrapper").css("top", 128)
    } else {
        $("#mbmcpebul_wrapper").css("top", 50 + (224 - $(this).scrollTop()))
    }
});

function Popup(id) {
    $("#popup_" + id).bPopup().close();
    if ($("#popup_" + id).height() > 600) {
        $("#popup_" + id).bPopup({position: [, 20]})
    } else {
        $("#popup_" + id).bPopup()
    }
}

function ShowTopMenu() {
}

if (!Array.prototype.filter) {
    Array.prototype.filter = function (fun) {
        if (this === void 0 || this === null) {
            throw new TypeError()
        }
        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function") {
            throw new TypeError()
        }
        var res = [];
        var thisp = arguments[1];
        for (var i = 0; i < len; i++) {
            if (i in t) {
                var val = t[i];
                if (fun.call(thisp, val, i, t)) {
                    res.push(val)
                }
            }
        }
        return res
    }
}
Array.prototype.uniqueObjects = function (props) {
    function compare(a, b) {
        var prop;
        if (props) {
            for (var j = 0; j < props.length; j++) {
                prop = props[j];
                if ($.trim(a[prop]) != $.trim(b[prop])) {
                    return false
                }
            }
        } else {
            for (prop in a) {
                if ($.trim(a[prop]) != $.trim(b[prop])) {
                    return false
                }
            }
        }
        return true
    }

    return this.filter(function (item, index, list) {
        for (var i = 0; i < index; i++) {
            if (compare(item, list[i])) {
                return false
            }
        }
        return true
    })
};