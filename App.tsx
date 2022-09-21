import {
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
import {useState} from 'react';






const App = () => {
  const [showText, setShowText] = useState('');

  const showRightText = () => {
    setShowText('Day la text')
  }
  
  return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        flexWrap: 'nowrap',
        alignItems: 'center',
      }}>
          <Image
             source={{
              uri: "https://news.taihen.vn/wp-content/uploads/sites/2/2022/05/Anya-Forger-1-758x379.jpg",
             }} style={{
              width: 113,
              height: 96,
              borderRadius: 50,
              top: 74,
             }}
          />
          <View style={{
            flex: 1,
            top: 100,
            flexDirection:'row',
          }}>
            
          <TouchableOpacity onPress={showRightText}>

          <Text style={{
            fontWeight: 'bold',
            color: 'black',
            fontSize: 20,
            textAlign: 'center',
          }}>
                 Thuan Le
          </Text>
          
          <View>
              <Text style={{textAlign:'right', bottom:25, left: 90}}>{showText}</Text>
          </View>

            </TouchableOpacity>
         

          
          
          </View>
       
         
         



      <View style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-around',
      }}>
        <TouchableOpacity style={{
           backgroundColor: '#E3C000',
           width: 194,
           height: 67,
           borderRadius: 40,
           alignItems: 'center',
           justifyContent: 'center',
        }}>
          <Text style={{
            fontWeight: 'bold',
            fontSize: 18,
            color: 'black',
            
          }}>Đổi mật khẩu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{
          backgroundColor: '#E3C000',
          width: 194,
          height: 67,
          borderRadius: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <Text style={{
            textAlign: 'center',
            fontWeight: 'bold',
           fontSize: 18,
           color: 'black',
         }}>Đăng xuất</Text>
        </TouchableOpacity>
      </View>
      </View>
  );
};
export default App;
