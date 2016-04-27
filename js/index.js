var patchData = {
  nodes: [
  {
    id: 1,
    proto: 'float',
    args: [1],
    layout:
    {
      "x":100,
      "y":200
    },
    //layout: {<key>: <value>},
    //data: [<number1>, ..., <numberN>],
  },
  {
    id: 2,
    proto: 'float',
    args: [2],
    layout:
    {
      "x":150,
      "y":200
    },
  },
  {
    id: 3,
    proto: '+',
    args: [],
    layout:
    {
      "x":120,
      "y":250
    },
  }],
  connections: [
  {
    source: {
      id: 1,
      port: 0
    },
    sink: {
      id: 3,
      port: 0
    }
  },
  {
    source: {
      id: 2,
      port: 0
    },
    sink: {
      id: 3,
      port: 1
    }
  }]
}

$('#svg').html(pdfu.renderSvg(patchData, {svgFile: false, ratio: 1.5}))
$('g').click(function(ev) {
  var self = this;

  var txtInput = $('<input type="text" style="width: 62px; position: absolute"/>')
    .change(function(ev) {
      var txt = $(self).children('text');
      txt.html($(this).val());
      $(this).remove();
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
