import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import { globalStyles } from '../styles/globalStyles';

interface PlayerScreenProps {
  navigation: any;
}

export default function PlayerScreen({ navigation }: PlayerScreenProps) {
  const [player1, setPlayer1] = useState<string>('');
  const [player2, setPlayer2] = useState<string>('');

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.title}>Welcome to Tic-Tac-Toe!</Text>

      <TextInput
        placeholder="Player 1 Name"
        value={player1}
        onChangeText={setPlayer1}
        style={globalStyles.input}
      />
      <TextInput
        placeholder="Player 2 Name"
        value={player2}
        onChangeText={setPlayer2}
        style={globalStyles.input}
      />

      <Button
        title="Start Game"
        onPress={() => navigation.navigate('Game', { player1, player2 })}
      />
    </View>
  );
}