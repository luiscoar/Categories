'use strict';
const config = {
 app: {
   port: 9000
 },
 db: {
   host: 'mongodb://adm_writer:wV4fqmQUbB60DZ93@Cluster0-shard-00-00-t5sin.mongodb.net:27017,Cluster0-shard-00-01-t5sin.mongodb.net:27017,Cluster0-shard-00-02-t5sin.mongodb.net:27017/adm_back?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin',
   port: 27017,
   name: 'App'
 },
 messages :
 {
 	operation_error : 'ERROR AL REALIZAR LA OPERACION',
 	operation_sucess: 'OPERACION REALIZADA CON EXITO',
	operation_parcial_sucess: 'OPERACION REALIZADA PARCIALMENTE CON EXITO, VERIFIQUE INTEGRIDAD DE REGISTROS',
 	not_found : 'NO SE ENCONTRÓ RECURSO SOLICITADO'
 },
 statup_messages : {
 	CONECTION_READY : 'Conexion creada...',
 	SERVER_RUNNING : 'Servidor corriendo...'
 },
 http_codes :
 {
 	SERVER_ERROR:500, //error en respuesta de algun promise
 	FORGIVEN:403, // no tiene permisos
 	NOT_FOUND:404,// no see encontro recurso
 	SUCCESS:201,// operacion realizada con exito,
	SUCCESS_PARCIAL:203// operacion realizada con exito parcialmente,
 }
};

module.exports = config;
