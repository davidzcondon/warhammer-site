

    function createHeaderSection(title) {
        return "<section><header><h1>" + title + "</h1></header></section>"
    }

    function createImageSection(title, num_photos) {
        images_html = ""
        for (i = 1; i <= num_photos; i++) {
            if (i % 2 == 1) {
                images_html = images_html + "<section>"
            }
            title_path = title.replace(/ /g, "-")
            images_html = images_html + "<aside><a href=\"images/" + title_path + "/" + i + ".JPG\" title=\"" + title + "\"><img src=\"images/" + title_path + "/" + i + ".tn.jpg\" width=\"720px\" /></a></aside>"
            if (i % 2 == 0) {
                images_html = images_html + "</section>"
            }
        }
        return images_html
    }


    function createImagePage(div, title, num_photos) {
        div.append(createHeaderSection(title))
        div.append(createImageSection(title, num_photos))
    }