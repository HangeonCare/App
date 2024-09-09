export default function SignUp() {
  const [number, setNumber] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [passwordCheck, setPasswordCheck] = React.useState("");

  const [numberError, setNumberError] = React.useState("");
  const [passwordError, setPasswordError] = React.useState("");
  const [passwordCheckError, setPasswordCheckError] = React.useState("");

  const NumberRegex = /^[0-9]{11}$/;
  const PasswordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,16}$/;

  function validatePhoneNumber() {
    if (!NumberRegex.test(number)) {
      setNumberError("전화번호를 다시 확인해주세요");
    } else {
      setNumberError("");
    }
  }

  function validatePassword() {
    if (!PasswordRegex.test(password)) {
      setPasswordError(
        "비밀번호는 8자 이상 16자 이내, 특수문자가 들어가야 합니다!"
      );
    } else {
      setPasswordError("");
    }
  }

  function checkPasswordMatch() {
    if (password !== passwordCheck) {
      setPasswordCheckError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordCheckError("");
    }
  }

  function send() {
    axios
      .post("url", {
        phoneNumber: number,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("userData", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30,
      }}
    >
      <Image
        resizeMode="contain"
        style={{ width: 300, height: 75 }}
        source={require("../assets/loginLogo.png")}
      />
      <Text style={styles.LoginText}>Create Account</Text>

      <TextInput
        onChangeText={(text) => setNumber(text)}
        onEndEditing={validatePhoneNumber}
        style={styles.input}
        placeholder="전화번호를 입력하세요..."
      />
      <Text>{numberError}</Text>

      <TextInput
        maxLength={6}
        keyboardType="numeric"
        style={styles.input}
        placeholder="인증번호 6자리를 입력하세요..."
      />
      <Text>{numberError}</Text>

      <TextInput
        secureTextEntry={true}
        onChangeText={(text) => setPassword(text)}
        onEndEditing={validatePassword}
        style={styles.input}
        placeholder="사용하실 비밀번호를 입력하세요..."
      />
      <Text>{passwordError}</Text>

      <TextInput
        secureTextEntry={true}
        onChangeText={(text) => setPasswordCheck(text)}
        onEndEditing={checkPasswordMatch}
        style={styles.input}
        placeholder="사용하실 비밀번호를 재입력하세요..."
      />
      <Text>{passwordCheckError}</Text>

      <TouchableOpacity onPress={send}>
        <Text style={styles.Button}>Create Your Account!</Text>
      </TouchableOpacity>
    </View>
  );
}
