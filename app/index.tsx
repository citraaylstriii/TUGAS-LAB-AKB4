import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
export default function TugasAkhirMajeri() {
  return (
    <SafeAreaView style={jeryVisual.latar}>
      <ScrollView contentContainerStyle={jeryVisual.konten}>
        <Text style={[jeryVisual.judul, { fontFamily: 'Anton-Regular' }]}>
          Final Project - Citra
        </Text>
        <Text style={jeryVisual.subJudul}>
          Referensi Stambuk: 105841101722
        </Text>
        <View style={jeryVisual.pemisah} />
        {/* --- 5 NAMA DENGAN FONT STATIS --- */}
        <Text style={[jeryVisual.itemTeks, { fontFamily: 'Anton-Regular' }]}>
          Muliana{'\n'}(105841103822)
        </Text>
        <Text style={[jeryVisual.itemTeks, { fontFamily: 'Merriweather-Regular', fontSize: 20 }]}>
          milani{'\n'}(105841100822)
        </Text>
        <Text style={[jeryVisual.itemTeks, { fontFamily: 'Nunito-Light', color: '#333' }]}>
          nabila ismail matta{'\n'}(105841100722)
        </Text>
        <Text style={[jeryVisual.itemTeks, { fontFamily: 'PlayfairDisplay-Regular', fontStyle: 'italic' }]}>
          Nurmisba{'\n'}(105841103422)
        </Text>
        <Text style={[jeryVisual.itemTeks, { fontFamily: 'SourceCodePro-Regular' }]}>
          marwa{'\n'}(105841100122)
        </Text>
        <View style={jeryVisual.pemisah} />
        {/* --- 5 NAMA DENGAN FONT VARIABEL --- */}
        <Text style={[jeryVisual.itemTeks, { fontFamily: 'Recursive-VariableFont', fontWeight: '300' }]}>
          fathir{'\n'}(105841102922)
        </Text>
        <Text style={[jeryVisual.itemTeks, { fontFamily: 'Epilogue-VariableFont', fontWeight: '400', fontSize: 20 }]}>
          Parwati{'\n'}(105841100622)
        </Text>
        <Text style={[jeryVisual.itemTeks, { fontFamily: 'Jost-VariableFont', fontWeight: '500', color: '#333' }]}>
          Yusri Ali{'\n'}(105841117222)
        </Text>
        <Text style={[jeryVisual.itemTeks, { fontFamily: 'WorkSans-VariableFont', fontWeight: '700', fontStyle: 'italic' }]}>
          Nur muhammad ashman{'\n'}(105841103122)
        </Text>
        <Text style={[jeryVisual.itemTeks, { fontFamily: 'Lexend-VariableFont', fontWeight: '900' }]}>
          Arif Rahman{'\n'}(105841100921)
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}
const jeryVisual = StyleSheet.create({
  latar: { 
    flex: 1, 
    backgroundColor: '#EFEFEF',
  },
  konten: { 
    paddingHorizontal: 15,
    paddingVertical: 25,
  },
  judul: { 
    fontSize: 28, 
    fontWeight: 'bold', 
    color: '#222', 
    textAlign: 'center',
    marginBottom: 5,
  },
  subJudul: { 
    fontSize: 14, 
    color: '#888', 
    textAlign: 'center', 
  },
  itemTeks: {
    fontSize: 22,
    color: '#000',
    textAlign: 'center',
    marginBottom: 20,
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 4,
    backgroundColor: '#FFF',
    lineHeight: 30,
  },
  pemisah: {
    height: 1,
    backgroundColor: '#CCC',
    width: '80%',
    alignSelf: 'center',
    marginVertical: 20,
  }
});
