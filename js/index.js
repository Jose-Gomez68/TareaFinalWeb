$(function() {

    $('.carousel').carousel({
          interval: 2000
      });

      $("[data-toggle='tooltip']").tooltip();

      $("[data-toggle='popover']").popover();
      
      $('#contacto').on('show.bs.modal', function (e){
          console.log('el modal se esta mostrando');
            $('#contactoBtn').removeClass('btn-outline-success');
            $('#contactoBtn').addClass('btn-primary');
            $('#contactoBtn').prop('disable',true);
      });
      $('#contacto').on('shown.bs.modal', function (e){
          console.log('el modal se ');
      });

      $('#contacto').on('hide.bs.modal', function (e){
          console.log('el modal se oculta');
      });
      $('#contacto').on('hidden.bs.modal', function (e){
          console.log('el modal se oculto');
          $('#contactoBtn').prop('disable',false);
      });
  });