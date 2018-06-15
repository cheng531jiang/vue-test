import express from "express";
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

const app = express( );

const DEFAULT_PORT = 8081;
app.use( bodyParser.json( ) );
app.use( cookieParser( ) );
app.use( express.static( path.resolve( __dirname, "./public" ) ) );


app.listen( process.env.NODE_PORT || DEFAULT_PORT );
