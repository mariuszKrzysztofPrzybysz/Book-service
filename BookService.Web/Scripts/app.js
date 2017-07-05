﻿var ViewModel = function() {
    var self = this;
    self.books = ko.observableArray();
    self.detail = ko.observable();
    self.error = ko.observable();

    var booksUri = "/api/books/";

    function ajaxHelper(uri, method, data) {
        self.error("");
        return $.ajax({
            type: method,
            url: uri,
            dataType: "json",
            contentType: "application/json",
            data: data ? JSON.stringify(data) : null
        }).fail(function(jqXhr, textStatus, errorThrown) {
            self.error(errorThrown);
        });
    }

    function getAllBooks() {
        ajaxHelper(booksUri, "GET").done(function(data) {
            self.books(data);
        });
    }

    getAllBooks();

    self.getBookDetail = function (item) {
        ajaxHelper(booksUri + item.Id, "GET").done(function (data) {
            self.detail(data);
        });
    }
};

ko.applyBindings(new ViewModel());