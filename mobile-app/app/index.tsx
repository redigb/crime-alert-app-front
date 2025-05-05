import { useEffect } from 'react';
import { Redirect } from 'expo-router';
import { useAuthStore } from '@/store/auth'; // ajusta la ruta según tu proyecto

export default function Index() {
  const isAuth = useAuthStore((state) => state.isAuth);

  if (!isAuth) {
    return <Redirect href="/auth/login"/>;
  }

  return <Redirect href='/(protected)/start' />
}

