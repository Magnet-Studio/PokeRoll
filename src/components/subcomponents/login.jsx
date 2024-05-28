import React, { useState, useEffect } from 'react';
import './styles/login.css';
import { Link, useNavigate } from 'react-router-dom';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';

function Login({ setUserData }) {
    const [isRegistering, setIsRegistering] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState({
        length: true,
        digit: true,
        specialChar: true,
        upperCase: true,
        lowerCase: true
    });
    const [liveMessage, setLiveMessage] = useState('');

    useEffect(() => {
        document.title = isRegistering ? "PokéROLL (Registro)" : "PokéROLL (Iniciar sesión)"
    }, [])

    const toggleRegistering = () => {
        setIsRegistering(!isRegistering);
        document.title = !isRegistering ? "PokéROLL (Registro)" : "PokéROLL (Iniciar sesión)"
    };

    const validatePassword = (password) => {
        return {
            length: password.length >= 8,
            digit: /\d/.test(password),
            specialChar: /[\W_]/.test(password),
            upperCase: /[A-Z]/.test(password),
            lowerCase: /[a-z]/.test(password)
        };
    };

    const handlePasswordChange = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);
        const validationResults = validatePassword(newPassword);
        setError(validationResults);

        let message = 'Requisitos de contraseña actualizados: ';
        if (!validationResults.length) message += 'Debe tener al menos 8 caracteres. ';
        if (!validationResults.digit) message += 'Debe tener un dígito. ';
        if (!validationResults.specialChar) message += 'Debe tener un carácter especial. ';
        if (!validationResults.upperCase) message += 'Debe tener una letra mayúscula. ';
        if (!validationResults.lowerCase) message += 'Debe tener una letra minúscula. ';

        // Forzar actualización del mensaje del lector de pantalla
        setLiveMessage('');
        setTimeout(() => setLiveMessage(message), 100);
    };

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const navigate = useNavigate();
    const UpdateUserDataHandler = (event) => {
        event.preventDefault();
        setUserData(prevUserData => {
            return {
                ...prevUserData,
                name: username,
                pass: password
            };
        });
        navigate('/');
    };

    return (
        <div>
            <h1>{isRegistering ? 'Registro' : 'Iniciar sesión'}</h1>
            <form method='get' onSubmit={UpdateUserDataHandler}>
                <label htmlFor="usernameInput">Nombre de usuario:</label>
                <input
                    id="usernameInput"
                    type="text"
                    value={username}
                    onChange={handleUsernameChange}
                    aria-label="Nombre de usuario"
                    tabIndex="1"
                /><br />
                <label htmlFor="passwordInput">Contraseña: </label>
                <input
                    id="passwordInput"
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    aria-describedby="passwordHelp"
                    tabIndex="2"
                />
                <div id="liveRegion" aria-live="polite" style={{ position: 'absolute', top: '-9999px', left: '-9999px' }}>
                    {liveMessage}
                </div>
                <div className="passwordHelpContainer" id="passwordHelp">
                    <p>Debe contener:</p>
                    <p id="lengthReq">
                        {password && (error.length ? <CheckCircleIcon aria-label="Correcto, al menos 8 caracteres" /> : <CancelIcon aria-label="Incorrecto, necesita al menos 8 caracteres" />)}
                        Al menos 8 caracteres.
                    </p>
                    <p id="digitReq">
                        {password && (error.digit ? <CheckCircleIcon aria-label="Correcto, contiene un dígito" /> : <CancelIcon aria-label="Incorrecto, necesita un dígito" />)}
                        Un dígito.
                    </p>
                    <p id="specialCharReq">
                        {password && (error.specialChar ? <CheckCircleIcon aria-label="Correcto, contiene un carácter especial" /> : <CancelIcon aria-label="Incorrecto, necesita un carácter especial" />)}
                        Un carácter especial.
                    </p>
                    <p id="upperCaseReq">
                        {password && (error.upperCase ? <CheckCircleIcon aria-label="Correcto, contiene una letra mayúscula" /> : <CancelIcon aria-label="Incorrecto, necesita una letra mayúscula" />)}
                        Una letra mayúscula.
                    </p>
                    <p id="lowerCaseReq">
                        {password && (error.lowerCase ? <CheckCircleIcon aria-label="Correcto, contiene una letra minúscula" /> : <CancelIcon aria-label="Incorrecto, necesita una letra minúscula" />)}
                        Una letra minúscula.
                    </p>
                </div>
                <div className="loginButtonContainer">
                    <button
                        id="loginButton"
                        type="submit"
                        disabled={username === '' || Object.values(error).includes(false)}
                        tabIndex="3"
                        aria-disabled={username === '' || Object.values(error).includes(false)}
                    >
                        {isRegistering ? 'Registrarse' : 'Iniciar sesión'}
                    </button>
                </div>
            </form>
            <div className="loginRegisterContainer">
                <p tabIndex="4">
                    {isRegistering ? '¿Ya tienes cuenta? ' : '¿No tienes cuenta? '}
                    <Link onClick={toggleRegistering} tabIndex="5">
                        {isRegistering ? 'Iniciar sesión' : 'Regístrate'}
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Login;
