import React, { useState } from 'react';
import './styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import TextField from '@mui/material/TextField';

function Login({setUserData}) 
{
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);

    const toggleRegistering = () => {
        setIsRegistering(!isRegistering);
    };

    const validatePassword = (password) => {
        const regex = /(?=^.{8,}$)(?=.*\d)(?=.*[\W_])(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/;
        return regex.test(password);
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        setError(!validatePassword(newPassword));
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const navigate = useNavigate();
    const UpdateUserDataHandler = () => {
        setUserData(prevUserData => {
            return {
                ...prevUserData,
                name: username,
                pass: password
            };
        });
        navigate('/pokerroll/');
    };

    return (
        <div>
            <h1>{isRegistering ? 'Registro' : 'Iniciar sesión'}</h1>
            <form method='get'>
                <label for="usernameInput">Nombre de usuario:</label>
                <input id="usernameInput" type="text" value={username} onChange={handleUsernameChange}></input><br/>
                <label for="passwordInput">Contraseña: </label>
                <TextField
                    id="passwordInput"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    error={error}
                    helperText={error ? 'La contraseña debe tener al menos 8 caracteres, una letra mayúscula y una letra minúscula, un dígito y un carácter especial.' : ''}
                />
                <div className="loginButtonContainer">
                    <button id="loginButton" onClick={UpdateUserDataHandler} disabled={username === '' || error}>{isRegistering ? 'Registrarse' : 'Iniciar sesión'}</button>
                </div>
            </form>

            <p>
                {isRegistering ? '¿Ya tienes cuenta? ' : '¿No tienes cuenta? '}
                <Link onClick={toggleRegistering}>
                    {isRegistering ? 'Iniciar sesión' : 'Regístrate'}
                </Link>
            </p>
        </div>
    );
}

export default Login;