// Parse all h{2-6} titles to create an automated menu
// Have to be used with automenu.html
$(function() {
    $('h1, h2, h3, h4, h5, h6').each(function() {
      $elf = $(this)
        $("#automenu_ul").append(
            $("<li>", {}).append(
                $("<a>", { href: "#" + $elf.attr('id') }).text(
                $elf.text()
                )
            )
        )
    })
})
