import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import * as Speech from 'expo-speech';

const data = [
  { letter: 'A', word_en: 'Apple', word_ar: 'تفاحة', image: 'https://i.imgur.com/1bX5QH6.png' },
  { letter: 'B', word_en: 'Ball', word_ar: 'كرة', image: 'https://i.imgur.com/3yaf2lP.png' },
  { letter: 'C', word_en: 'Cat', word_ar: 'قطة', image: 'https://i.imgur.com/7yUvePI.png' },
];

export default function App() {
  const [index, setIndex] = useState(0);
  const [lang, setLang] = useState('en');

  const item = data[index];

  const speak = () => {
    const text = lang === 'en' ? item.word_en : item.word_ar;
    Speech.speak(text);
  };

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'#FFF8DC' }}>

      <Text style={{ fontSize: 80 }}>{item.letter}</Text>

      <Image source={{ uri: item.image }} style={{ width:150, height:150 }} />

      <Text style={{ fontSize: 30 }}>
        {lang === 'en' ? item.word_en : item.word_ar}
      </Text>

      <TouchableOpacity onPress={speak}>
        <Text style={{ fontSize:20 }}>🔊 صوت</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setLang(lang === 'en' ? 'ar' : 'en')}>
        <Text style={{ marginTop:20 }}>🌐 تغيير اللغة</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setIndex((index+1)%data.length)}>
        <Text style={{ marginTop:20 }}>➡️ التالي</Text>
      </TouchableOpacity>

    </View>
  );
}
