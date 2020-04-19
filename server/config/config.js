/* ----------------------- */
/* PUERTO */
/* ----------------------- */
process.env.PORT = process.env.PORT || 3000;

/* ----------------------- */
/* ENTORNO */
/* ----------------------- */
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';

/* ----------------------- */
/* LIMITE DE TOKEN */
/* ----------------------- */
process.env.EXPIRED_TOKEN = 60 * 60 * 24 * 30;

/* ----------------------- */
/* SEED */
/* ----------------------- */
process.env.SEED = process.env.SEED || 'el-gato-esta-en-desarrollo'

/* ----------------------- */
/* BASE DE DATOS */
/* ----------------------- */
process.env.URLDB = process.env.NODE_ENV === 'dev' ? 'mongodb://localhost:27018/value_prop' : process.env.MONGO_URI;