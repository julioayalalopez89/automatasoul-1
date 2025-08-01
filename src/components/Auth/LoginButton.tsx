// src/components/LoginButton.jsx
import { supabase } from '../../lib/supabaseClient.ts'

function LoginButton() {
  const signInWithGoogle = async () => {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })
    if (error) console.error('Error al iniciar sesión:', error.message)
  }

  return (
    <button onClick={signInWithGoogle}>
      Iniciar sesión con Google
    </button>
  )
}

export default LoginButton
