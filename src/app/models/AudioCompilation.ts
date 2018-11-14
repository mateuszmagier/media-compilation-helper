interface AudioCompilation {
  _id?: { $oid: string }; // struktura narzucona przez MongoDB
  userId?: string;
  name?: string;
  created?: Date;
  audiofiles: Array<AudioFile>;
}
