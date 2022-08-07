import React, { useState } from "react";
import { View, Text, TouchableOpacity, TextInput, ToastAndroid, ActivityIndicator } from "react-native"
import globalStyles from "../../styles";
import Ionicons from "react-native-vector-icons/Ionicons";
import colors from "../../styles/colors"
import Appbar from "../../components/Util/Appbar"
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import config from "../../config";
import mime from "mime"
import * as ImagePicker from "expo-image-picker"
import { useNavigation } from "@react-navigation/native";
import Stocks from "../../api/model/Stocks";