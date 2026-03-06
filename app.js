
const SUPABASE_URL = 'https://tedswrqzjdfxhvdyszmj.supabase.co'; 
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRlZHN3cnF6amRmeGh2ZHlzem1qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzI3NTU0MDgsImV4cCI6MjA4ODMzMTQwOH0.0WXKTZB_-DgHAZ2g5CHmISnnSjJNZWwoHBHYiDicNuQ';

const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);


async function verificar() {
    const { data, error } = await supabase.from('servicios').select('*');
    if (error) {
        console.log("Error de conexión:", error.message);
    } else {
        console.log("✅ Conexión establecida. Servicios:", data);
    }
}

verificar();
