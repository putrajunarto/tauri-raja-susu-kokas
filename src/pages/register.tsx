import styles from "@/styles/Home.module.css";
import useIdleTimer from "../libs/useIdleTimer";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useUser } from '../contexts/UserContext';
import Keyboard from 'react-simple-keyboard';
import 'react-simple-keyboard/build/css/index.css';

export default function Register() {
  const { login } = useUser();
  const router = useRouter();
  const [err, setErr] = useState('');
  const [loading, setLoading] = useState(false);

  const [inputs, setInputs] = useState<{ [key: string]: string }>({
    input1: "",
    input2: ""
  });
  const [focusedInput, setFocusedInput] = useState("input1");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const keyboardRef = useRef<any>(null);

  const onChange = (input: string) => {
    setInputs((prev) => ({
      ...prev,
      [focusedInput]: input
    }));
  };

  const onKeyPress = (button: string) => {
    if (button === "{shift}" || button === "{lock}") handleShift();
  };

  const handleShift = () => {
    if (keyboardRef.current) {
      const currentLayout = keyboardRef.current.options.layoutName;
      keyboardRef.current.setOptions({
        layoutName: currentLayout === "default" ? "shift" : "default"
      });
    }
  };

  const handleInputFocus = (inputName: string) => {
    setFocusedInput(inputName);
    keyboardRef.current.setInput(inputs[inputName]);
  };

  const handleIdle = () => {
    router.push("/");
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const postRegist = async (props: any) => {
    const response = await fetch(`https://api.nutrilon.qyubit.com/api/register`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(props),
    });
    console.log("response", response);
    return await response.json();
  };

  const onSubmit = () => {
    setLoading(true);
    const sendData = {
      username: inputs.input1,
      phone: inputs.input2,
    }
    if (inputs.input1 == "") {
      setErr("nama tidak boleh kosong");
      setLoading(false);
    } else if (inputs.input2 == "") {
      setErr("nomor HP tidak boleh kosong");
      setLoading(false);
    } else {
      postRegist(sendData)
        .then((res) => {
          if (res.success) {
            login(res.data);
            router.push('home');
          } else {
            setErr('terjadi kesalahan saat mengirim data');
            setLoading(false);
          }
        })
        .catch((err) => {
          console.log("error", err);
          setErr('terjadi kesalahan saat mengirim data');
          setLoading(false);
        });
    }
  }

  useIdleTimer(handleIdle, 30000); // 30 detik iddle auto redirect

  return (
    <>
      <div className={`${styles.home} ${styles.dFlex} ${styles.alignItemsCenter} ${styles.justifyContentCenter}`}>
        <div style={{ padding: '20px' }}>
          <div className={styles.formRegister} style={{ marginBottom: '20px' }}>
            <h1>Register</h1>
            <div className={styles.mt20}>
              <input
                className={styles.formInput}
                placeholder="Nama"
                value={inputs.input1}
                onFocus={() => handleInputFocus("input1")}
                readOnly
              />
              <input
                className={`${styles.formInput} ${styles.mt10}`}
                placeholder="Nomor Whatsapp"
                value={inputs.input2}
                onFocus={() => handleInputFocus("input2")}
                readOnly
              />
              <small className={`${styles.textDanger} ${styles.textCapitalize}`}>
                {err ? err : ''}
              </small>
              <button type="button" disabled={loading} onClick={() => onSubmit()} className={`${styles.btnSubmit} ${styles.mt10}`}>Submit</button>
            </div>
          </div>
          <Keyboard
            keyboardRef={(r) => (keyboardRef.current = r)}
            onChange={onChange}
            onKeyPress={onKeyPress}
          />
        </div>
      </div>
    </>
  );
}
