const {addNoteHandler, getAllNotesHandler, getSpesificNotesHandler, editSpesificNotesHandler, deleteSpesificNotesHandler } = require('./handler');

const route = [
  /*{

    method:'GET',
    path:'/json/{onmyoXID?}',
    handler: (request,h) => {
        const data = {
          onmyojiID : "Aobashi",
          currentID : "TooruAmuro",
          guild : "NuraDojo",
          duelPVP : 1600,
          rankGuild_A : 4,
          rankGuild_PVP : 20
        };

        const {onmyoXID = "Guest404"} = request.params;
        const {region} = request.query;

        if (request.query.region === 'jpn') {
          return 'ohayo japan!';
        }

        console.log(typeof(request.params));
        console.log(request.params);
        console.log(typeof(onmyoXID));
        console.log(onmyoXID);

        if (onmyoXID === data.onmyojiID) {

            return h.response('Here\'s the data \n'+JSON.stringify(data)).code(200);
        }
        else if (onmyoXID !== data.onmyojiID && onmyoXID !== 'Guest404') {
            return h.response('No such ID player like dat!').code(404);
        }
        else {
            return h.response('Hallo, it seems u don\'t assign id for data, mr.'+onmyoXID).code(500);
        }

    },
  },
  */
  {
   method:'POST',
   path:'/notes',
   handler: addNoteHandler,
  },
  {
   method:'GET',
   path:'/notes',
   handler: getAllNotesHandler,
  },
  {
   method:'GET',
   path:'/notes/{id}',
   handler: getSpesificNotesHandler,
 },
 {
   method:'PUT',
   path:'/notes/{id}',
   handler: editSpesificNotesHandler,
 },
 {
   method:'DELETE',
   path:'/notes/{id}',
   handler: deleteSpesificNotesHandler,
 }
];

module.exports = route;
