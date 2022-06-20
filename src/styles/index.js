import { StyleSheet } from "react-native"
import colors from "./colors"

const globalStyles = StyleSheet.create({
    fullScreen: {
        flex: 1,
        backgroundColor: colors.backgroundColor,
    },
    container: {
        width: "100%",
        maxWidth: 1000,
        flexDirection: "column",
        alignSelf: "center",
        paddingHorizontal: 5,
    },
    containerRow: {
        width: "100%",
        maxWidth: 1000,
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "space-evenly"
    },
    title: {
        fontSize: 14,
        fontWeight: "700",
        color: colors.dark,
    },
    titleSm: {
        fontSize: 12,
        fontWeight: "600",
        color: colors.dark
    },
    perfectCenter: {
        flex: 1,
        backgroundColor: colors.white,
        alignItems: "center",
        justifyContent: "center",
    },
    column: {
        flexDirection: "column",
    },
    columnCenter: {
        flexDirection: "column",
        alignItems: "center"
    },
    normalText: {
        fontSize: 13,
        color: colors.dark,
        lineHeight: 20,
        letterSpacing: 0.4,
        marginVertical: 2
    },
    smallText: {
        fontSize: 10,
        color: colors.dark,
        lineHeight: 20,
        letterSpacing: 0.5,
    },
    authInput: {
        width: 260,
        height: 50,
        borderWidth: 1,
        borderColor: colors.grey,
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
        fontSize: 14,
        backgroundColor: "#fff",
    },
    primaryButton: {
        backgroundColor: colors.primary,
        width: 260,
        height: 50,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        zIndex: 2,
    },
    transparentButton: {
        backgroundColor: colors.primary + 77,
        width: 260,
        height: 50,
        borderRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        zIndex: 2,
    },
    button: {
        backgroundColor: "#ddd",
        width: "100%",
        padding: 5,
        borderRadius: 20,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        paddingVertical: 12
    },
    primaryButtonText: {
        fontSize: 14,
        color: colors.dark,
        fontWeight: "700",
    },
    warningButtonText: {
        fontSize: 14,
        color: colors.warning,
        fontWeight: "700",
    },
    disabledButtonText: {
        fontSize: 14,
        color: colors.grey,
        fontWeight: "600"
    },
    rowCenter: {
        flexDirection: "row",
        justifyContent: "center",
    },
    rowRight: {
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingHorizontal: 10,
    },
    rowLeft: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    rowSpaceBetween: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    rowSpaceEvenly: {
        flexDirection: "row",
        justifyContent: "space-evenly",
    },
    mediumSpace: {
        height: 50,
    },
    smallSpace: {
        height: 20,
    },
    largeSpace: {
        height: 70
    },
    mediumSpaceRow: {
        width: 50,
    },
    smallSpaceRow: {
        width: 20,
    },
    largeSpaceRow: {
        width: 70
    },
    header: {
        color: colors.dark,
        fontWeight: "bold",
        fontSize: 18,
        letterSpacing: 1
    },
    buttonIcon: {
        width: 40,
        height: 40,
    },
    topToolsbar: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 30,
        marginTop: 40,
        zIndex: 2,
        alignItems: "center",
        paddingBottom: 40,
        borderBottomWidth: 1,
        borderBottomColor: colors.borderColor
    },
    topToolsbarNoPadding: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 30,
        zIndex: 2,
    },
    card: {
        width: 500,
        maxWidth: "90%",
        flexDirection: "column",
        // elevation: 1,
        backgroundColor: colors.cardBackground,
        // shadowColor: "#000",
        // shadowOffset: { width: 1, height: 2 },
        // shadowOpacity: 0.37,
        // shadowRadius: 7.49,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.borderColor,
        marginVertical: 20,
        padding: 20,
        marginHorizontal: 20,
        overflow: "hidden"
    },
    itemCard: {
        width: 170, backgroundColor: colors.cardBackground, marginVertical: 10, padding: 10, borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 10
    },
    connectionLightOn: {
        width: 60,
        height: 18,
        backgroundColor: colors.green,
        opacity: 0.6,
        marginRight: 10,
    },
    connectionLightOff: {
        width: 60,
        height: 18,
        backgroundColor: colors.grey,
        opacity: 0.6,
        marginRight: 10,
    },
    mainVector: {
        height: 350,
        width: 100,
        opacity: 0.4
    },
    manualValue: {
        fontSize: 80,
        color: colors.primary,
        fontFamily: "SiekoonmZy",
    },
    smPadding: {
        padding: 10
    },
    deviceName: {
        color: colors.dark,
        fontWeight: "bold",
        fontSize: 16,
        letterSpacing: .5
    },
    brandLogo: {
        width: 60,
        height: 30
    },
    seperator: {
        width: "100%",
        backgroundColor: "#ddd",
        height: 1
    },
    actionItem: {
        width: "25%",
        flexDirection: "column",
        alignItems: "center"
    },
    half: {
        width: "50%",
        height: 50,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    select: {
        backgroundColor: colors.cardBackground,
        borderWidth: 1,
    }
})

export default globalStyles