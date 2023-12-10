import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

export default function TabItem({ title, active, onPress, onLongPress }) {
  const Icon = () => {
    if (title === 'Doctor') {
      return active ? <IconDoctorActive /> : <IconDoctor />;
    }
    if (title === 'Messages') {
      return active ? <IconMessagesActive /> : <IconMessages />;
    }
    if (title === 'Hospitals') {
      return active ? <IconHospitalsActive /> : <IconHospitals />;
    }
    return <IconDoctor />;
  };
  return (
    <TouchableOpacity onPress={onPress} onLongPress={onLongPress}>
      <Icon />
      <Text>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
