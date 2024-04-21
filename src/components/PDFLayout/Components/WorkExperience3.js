import * as React from "react";
import { Link, Text, View } from "@react-pdf/renderer";
import style from "../style";
import { Html } from "react-pdf-html";

export default ({ WorkExperience }) => {
    const styles = style;

    return (
        <View style={{ marginBottom: 10 }}>
            <Text style={styles.roleTitle}>
                {WorkExperience.workAs} -{" "}
                {WorkExperience.url ? (
                    <Link src={WorkExperience.url}>{WorkExperience.nameOfCompany}</Link>
                ) : (
                    <Text>{WorkExperience.nameOfCompany}</Text>
                )}
                <Text style={styles.subText}>
                    {" "}
                    - {WorkExperience.durationOfEmployment} - {WorkExperience.workType}
                </Text>
            </Text>

            <Text style={styles.text}>{WorkExperience.description}</Text>

            <View style={styles.text}>
                {WorkExperience.responsibilities.map((item, index) => (
                    <div key={index} style={styles.textInOneLine}>
                        <Text style={styles.text}>- {item}</Text>
                    </div>
                ))}
            </View>
        </View>
    );
};
