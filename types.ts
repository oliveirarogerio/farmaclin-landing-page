import React from 'react';

export enum UserType {
  PATIENT = 'Paciente',
  PHARMACIST = 'Farmacêutico'
}

export interface WaitlistFormState {
  email: string;
  name: string;
  userType: UserType;
}

export interface FeatureItem {
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface StepItem {
  number: number;
  title: string;
  description: string;
}