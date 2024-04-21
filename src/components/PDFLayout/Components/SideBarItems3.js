import * as React from "react";
import { Text, View, StyleSheet, Link } from "@react-pdf/renderer";
import style from "../style";
import { Html } from "react-pdf-html";

export default ({ items, title }) => {
    const styles = style;

    return (
        <View style={styles.section}>
            <Text style={styles.subTitle}>{title}</Text>
            {items.map((item) => {
                    if (item.url) {
                        return (
                            <Link style={styles.text} src={item.url}>
                                {item.title}
                            </Link>
                        );
                    } else {
                        return (
                            <div>
                                <Text style={styles.text2}>
                                    {item.title}{item.description}
                                </Text>
                            </div>
                            /*<View style={styles.text}>
                                <Html style={styles.roleSubTitle2} >{item.title}{item.description}</Html>
                            </View>*/
                        );
                    }
                }
            )}
        </View>
    );
};
