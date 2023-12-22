import { defineStore } from "pinia";
import { useAuth } from "@vueuse/firebase/useAuth";
import { auth, db } from "@/firebase";
import { doc, getDoc, setDoc, increment } from "firebase/firestore";
import firebase from "firebase/compat/app";

export const useUserStore = defineStore("user", () => {
  const { user, isAuthenticated } = useAuth(auth);
  const router = useRouter();
  const name = ref();
  const uid = ref();
  const email = ref();
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const profileImg = ref();
  const userData = ref();
  const checkingStatus = ref(false);
  const updatingUser = ref(false);

  async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function getUser() {
    checkingStatus.value = true;
    await sleep(500);
    if (user.value) {
      name.value = user.value?.displayName;
      uid.value = user.value?.uid;
      email.value = user.value?.email;
      profileImg.value = user.value?.photoURL;
      await getUserDataFromDb();
    }
    checkingStatus.value = false;
  }

  async function updateGenerationCount(count: number = 1) {
    updatingUser.value = true;
    const usersDocRef = doc(db, "users", uid.value);
    await setDoc(
      usersDocRef,
      {
        generations_count: increment(1),
        last_Render: new Date().getTime(),
      },
      { merge: true }
    );
    updatingUser.value = false;
    await getUserDataFromDb();
  }

  async function getUserDataFromDb() {
    if (isAuthenticated.value) {
      const docRef = doc(db, "users", uid.value);
      try {
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          userData.value = docSnap.data();
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  function resetUser() {
    name.value = "";
    uid.value = "";
    email.value = "";
  }

  async function logout() {
    await auth.signOut();
    resetUser();
    router.push("/auth/signin");
  }

  return {
    name,
    uid,
    email,
    getUser,
    logout,
    resetUser,
    getUserDataFromDb,
    timezone,
    userData,
    checkingStatus,
    isAuthenticated,
    updateGenerationCount,
    updatingUser,
  };
});
