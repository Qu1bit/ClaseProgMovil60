import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

interface CustomButtonProps {
    title: string;
    onClick: () => void;
    variant?: "primary" | "secondary" ;
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

const getStyles = (variant : 'primary' | 'secondary') => 
StyleSheet.create({
    container: {
        backgroundColor: 
        variant === "primary" ? "#2e4566": 'white',
        width: "50%",
        borderWidth: 1,
        borderRadius: 8,
        paddingVertical: 15,
        alignItems:'center',
    },
    text: {
        color: variant === "primary" ? "white":"black",
        fontSize:18,
        fontWeight: "500"
    }
});