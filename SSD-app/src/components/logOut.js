export default function LogOut() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>로그아웃</Text>
      <Text style={styles.text}>로그아웃 하시겠습니까?</Text>
      <TouchableOpacity onPress={() => handleLogOut()}>
        <Text style={styles.button}>로그아웃</Text>
      </TouchableOpacity>
    </View>
  );
}
