//This section fetches and supplies data to the rest of the service
var service = require('../Services/clipCommentService');

exports.add = function(req, res){
    data = {
        content: req.body.content,
        rating: req.body.rating,
        time : Date.now(),
        clip: req.body.clip,
        user: req.body.user
    }
    return service.addPopulate(req, res, data);
}

exports.getAll = function(req, res){
    return service.getAll(req, res);
}

exports.getById = function(req, res){
    var id = req.params.id;
    return service.getById(req, res, id);
}

exports.search = function(req, res){
    var option = req.query;
    return service.search(req, res, option);
}

exports.delete = function(req, res){
    var option = req.params.id;
    return service.delete(req, res, option);
}
