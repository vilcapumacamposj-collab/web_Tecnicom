import express from 'express';
import bodyParser from 'body-parser';
import pool from './db.js';
import bcrypt from 'bcrypt';

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Registro de usuario
app.post('/register', async (req, res) => {
    const { nombre, apellido, correo, telefono, contrasena, direccion } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(contrasena, 10);

        const sql = `
            INSERT INTO usuarios (nombre, apellido, correo, telefono, contrasena, direccion)
            VALUES ($1, $2, $3, $4, $5, $6)
        `;
        await pool.query(sql, [nombre, apellido, correo, telefono, hashedPassword, direccion]);

        res.send('Usuario registrado correctamente');
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al registrar usuario');
    }
});

// Login de usuario
app.post('/login', async (req, res) => {
    const { correo, contrasena } = req.body;

    try {
        const result = await pool.query('SELECT * FROM usuarios WHERE correo=$1', [correo]);
        const usuario = result.rows[0];

        if (!usuario) return res.status(400).send('Usuario no encontrado');

        const match = await bcrypt.compare(contrasena, usuario.contrasena);
        if (match) {
            res.send('Login exitoso');
        } else {
            res.status(400).send('Contraseña incorrecta');
        }
    } catch (err) {
        console.error(err);
        res.status(500).send('Error al iniciar sesión');
    }
});

app.listen(3000, () => {
    console.log('Servidor iniciado en http://localhost:3000');
});
