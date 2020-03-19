import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';


const AlbumList = () => {
    return (
    <ScrollView>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.faceStyle,
            styles.cardSectionStyle
            ]}>
            <Image
            source={{
                uri: "https://zmp3-photo-fbcrawler.zadn.vn/avatars/e/0/e065d385f2f32fcf8bcad9a44b3ae2e0_1461325446.jpg"
            }}
            style={{ width: 50, height: 50 }}/>
            
            <View style={styles.headerContentStyle}>
                <Text >Silence</Text>
                <Text >Before You Exit</Text>
            </View>
            </View>
            <View style={styles.cardSectionStyle}>
            <Image 
                style={styles.imageStyle}
                source={{
                uri: "https://pbs.twimg.com/media/Dp18wvnU8AA2LXf.jpg"
                }}
                />
            </View>   
        </View>
        
        <View style={styles.cardContainerStyle}>
            <View style={[styles.faceStyle,
            styles.cardSectionStyle
            ]}>
            <Image
            source={{
                uri: "https://zmp3-photo-fbcrawler.zadn.vn/avatars/e/0/e065d385f2f32fcf8bcad9a44b3ae2e0_1461325446.jpg"
            }}
            style={{ width: 50, height: 50 }}/>
            
            <View style={styles.headerContentStyle}>
                <Text >001_Love</Text>
                <Text >Before You Exit</Text>
            </View>
            </View>
            <View style={styles.cardSectionStyle}>
            <Image 
                style={styles.imageStyle}
                source={{
                uri: "https://images.genius.com/23eece99d1f291a7792fca96f5b65b50.1000x1000x1.jpg"
                }}
                />
            </View>   
        </View>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.faceStyle,
            styles.cardSectionStyle
            ]}>
            <Image
            source={{
                uri: "https://zmp3-photo-fbcrawler.zadn.vn/avatars/e/0/e065d385f2f32fcf8bcad9a44b3ae2e0_1461325446.jpg"
            }}
            style={{ width: 50, height: 50 }}/>
            
            <View style={styles.headerContentStyle}>
                <Text >002_Pain</Text>
                <Text >Before You Exit</Text>
            </View>
            </View>
            <View style={styles.cardSectionStyle}>
            <Image 
                style={styles.imageStyle}
                source={{
                uri: "https://images.genius.com/76d4c334f152af03371f18a076a778d3.1000x1000x1.jpg"
                }}

                />
            </View>   

        </View>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.faceStyle,
            styles.cardSectionStyle
            ]}>
            <Image
            source={{
                uri: "https://zmp3-photo-fbcrawler.zadn.vn/avatars/e/0/e065d385f2f32fcf8bcad9a44b3ae2e0_1461325446.jpg"
            }}
            style={{ width: 50, height: 50 }}/>
            
            <View style={styles.headerContentStyle}>
                <Text >Numb</Text>
                <Text >Before You Exit</Text>
            </View>
            </View>
            <View style={styles.cardSectionStyle}>
            <Image 
                style={styles.imageStyle}
                source={{
                uri: "https://static.qobuz.com/images/covers/kb/dd/mnncuj77iddkb_600.jpg"
                }}

                />
            </View>   

        </View>
        <View style={styles.cardContainerStyle}>
            <View style={[styles.faceStyle,
            styles.cardSectionStyle
            ]}>
            <Image
            source={{
                uri: "https://zmp3-photo-fbcrawler.zadn.vn/avatars/e/0/e065d385f2f32fcf8bcad9a44b3ae2e0_1461325446.jpg"
            }}
            style={{ width: 50, height: 50 }}/>
            
            <View style={styles.headerContentStyle}>
                <Text >Find Yourself(Remix)</Text>
                <Text >Before You Exit</Text>
            </View>
            </View>
            <View style={styles.cardSectionStyle}>
            <Image 
                style={styles.imageStyle}
                source={{
                uri: "https://m.media-amazon.com/images/I/71QPkjNT9jL._SS500_.jpg"
                }}

                />
            </View>   

        </View>

    </ScrollView>





    );
};

const styles = StyleSheet.create({
    cardContainerStyle: {
        borderWidth:1,
        borderRadius: 2,
        borderColor: "#ddd",
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop:10
      },
      cardSectionStyle: {
        padding: 5,
        backgroundColor: "#C1D3D4",
        borderColor: "#ddd",
        borderBottomWidth: 1,
      },
    
      before: {
        width:50,
        height:50,
      },
      imageStyle: {
        width:null,
        height:300,
        borderRadius: 2,
      },
    
      faceStyle: {
          
        flexDirection: "row",
        justifyContent: "flex-start",
      },
    
      headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        fontSize:20,
        color:'#000',
        marginLeft:20,
      }
});

export default AlbumList;