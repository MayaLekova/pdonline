var patchData;

function updateNodeFromString(id, str) {
  var args = str.split(' ');
  var proto = args[0];
  var node = _.findWhere(patchData.nodes, {id: id});
  node.proto = proto;
  if(args.length > 1) {
    args.shift();
    node.args = args;
  }
}

$.get('patches/math.json', function(patchJsonStr) {
  patchData = JSON.parse(patchJsonStr);
  
  $('#svg').html(pdfu.renderSvg(patchData, {svgFile: false, ratio: 1.5}))
  $('g').click(function(ev) {
    console.log(this.node);
    var self = this;

    var txtInput = $('<input type="text" style="width: 62px; position: absolute"/>')
      .change(function(ev) {
        var txtEl = $(self).children('text');
        var objectStr = $(this).val();
        txtEl.html(objectStr);
        $(this).remove();

        updateNodeFromString(+$(self).attr('id'), objectStr);
      }).focusout(function(ev) {
        $(this).remove();
      });

    txtInput.css({top: $(this).position().top
                , left: $(this).position().left});
    txtInput.val($(this).children('text').html());

    $("#svg").prepend(txtInput);
    txtInput.focus();
  })
  $('#svg > svg > g').unbind('click');
})

