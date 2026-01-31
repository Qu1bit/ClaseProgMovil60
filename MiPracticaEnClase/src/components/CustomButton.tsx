import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface CustomButtonProps {
    title: string;
    onClick: () => void;
    variant?: "primary" | "secondary" | "tertiary";
}
export default function CustomButton ({
    title,
    onClick,
    variant = "primary"
}: CustomButtonProps){
    const styles = getStyles(variant);
    return(
       <TouchableOpacity
            onPress={onClick}
            style={styles.container}>
            <Text
            style={styles.text}>
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const getStyles = (variant : 'primary' | 'secondary' | "tertiary") => 
StyleSheet.create({
    container: {
        backgroundColor: 
        variant === "primary"? "#2e4566": variant === "secondary"? "white": "transparent",
      width: "50%",

        
        borderRadius: 8,
        paddingVertical: 15,
        alignItems:'center',
    },
    text: {
        color: variant === "primary" ? "white": variant === "secondary"? "black":"blue",
        fontSize:variant === "primary" ? 18: variant === "secondary"? 18:10,
        fontWeight: "500",
        textDecorationLine: variant === "tertiary" ? "underline" : "none"
        
    }
});