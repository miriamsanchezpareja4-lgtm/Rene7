import React, { useState } from 'react';
import { Text, View, Button, Image, StyleSheet } from 'react-native';

export default function App() {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);
  const [mensaje, setMensaje] = useState("");

  const entrenar = () => {
    let nuevoXp = xp + 20;

    if (nuevoXp >= 100) {
      setLevel(level + 1);
      setXp(0);
      setMensaje("🔥 ¡Nivel subido!");
    } else {
      setXp(nuevoXp);
      setMensaje("⚽ ¡Buen entrenamiento!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>RM7 ⚽</Text>
      <Text style={styles.subtitle}>René - Delantero</Text>

      <Image
        source={{ uri: 'https://i.imgur.com/placeholder.png' }}
        style={styles.image}
      />

      <Text>Nivel: {level}</Text>
      <Text>XP: {xp}/100</Text>

      <Button title="Entrenar" onPress={entrenar} />

      <Text style={styles.msg}>{mensaje}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, alignItems: 'center' },
  title: { fontSize: 30, fontWeight: 'bold' },
  subtitle: { fontSize: 18, marginBottom: 10 },
  image: { width: 150, height: 150, margin: 10 },
  msg: { marginTop: 10, fontSize: 16 }
});