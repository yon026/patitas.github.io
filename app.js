
const SUPABASE_URL = 'https://tedswrqzjdfxhvdyszmj.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlZHN3cnF6amRmeGh2ZHlzem1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NTU0MDgsImV4cCI6MjA4ODMzMTQwOH0.0WXKTZB_-DgHAZ2g5CHmISnnSjJNZWwoHBHYiDicNuQ';

const db = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


async function verificar() {
    const { data, error } = await db.from('servicios').select('*');
    if (error) {
        console.log("❌ Error:", error.message);
    } else {
        console.log("✅ Conexión establecida. Servicios:", data);
    }
}

verificar();

async function manejarAuth(tipo) {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (tipo === 'registro') {
        const { data, error } = await db.auth.signUp({ email, password });
        if (error) alert("Error: " + error.message);
        else alert("¡Revisa tu correo para confirmar! (Si desactivaste confirmación, ya puedes entrar)");
    } else {
        const { data, error } = await db.auth.signInWithPassword({ email, password });
        if (error) {
            alert("Error: " + error.message);
        } else {
            // ¡Éxito! Redirigimos al área de reservas
            window.location.href = 'reservas.html';
        }
    }
}

function mostrarRegistro() {
    document.getElementById('auth-title').innerText = "Regístrate";
    document.getElementById('btn-login').style.display = 'none';
    document.getElementById('btn-registro').style.display = 'block';
    document.getElementById('toggle-auth').innerHTML = '¿Ya tienes cuenta? <a href="#" onclick="location.reload()">Inicia sesión</a>';
}
