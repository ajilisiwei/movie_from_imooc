$(function () {
    $('.del').click(function (event) {
        var target=$(event.target);
        var id=target.data('id');
        var tr=$('.item-id-'+id);
        $.ajax({
            type: 'DELETE',
            url: '/admin/book/list?id=' + id
        })
        .done(function (result) {
            if(result.success===1){
                if (tr.length > 0) {
                    tr.remove()
                }
            }
        });
    });
});