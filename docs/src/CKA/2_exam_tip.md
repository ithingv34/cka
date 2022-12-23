# 시험 환경과 팁

### 1. 컨텍스트 & 네임스페이스 설정
- 시험 환경에는 미리 설정된 6개의 쿠버네티스 클러스터가 제공된다. 
- 문제에 제시된 **지정된 클러스터**에 맞는 `컨텍스트` 와 `네임스페이스` 를 설정해야한다.

```shell
$ kubectl config set-context <컨테스트>
 --n=<네임스페이스>

$ kubectl config use-context <컨텍스트>
```

### 2. Alias 사용하기

- 시험을 치르는 동안 `kubectl`을 여러번 입력해야하기 때문에 `kubectl` 명령어에 대해 Alias를 설정하는 것이 효율적이다. 마찬가지로 `etcdtl`, `kubeadm` 에도 적용가능하다.

```shell
$ alias k=kubectl
$ k version
```

### 3. 리소스 단축 이름 사용하기

- `persistentvolumeclaims` 처럼 리소스명이 긴 명령어의 경우 축약된 이름을 사용하는 편이 좋다. `api-resources` 를 참고하면 된다.

```shell
$ kubectl api-resources
...
persistentvolumeclaims pvc true PersistentVolumeClaim
...

$ kubectl describe pvc my-claim
```

### 4. 쿠버네티스 개체 강제 삭제

쿠버네티스 개체 삭제를 위해 `delete`를 사용하지만 삭제로 인한 영향을 최소화하기 위해(우아하게)서는 삭제를 위한 시간이 오래걸릴 수 있다. 시험 환경에서는 시간 절약하기 위해 개체 삭제시 `--force` 옵션을 사용하여 개체를 즉시 삭제할 수 있다.

```shell
$ kubectl delete pod nginx --force
```

### 5. 개체 정보 찾기

쿠버네티스 관리자는 클러스터의 장애 상황을 조사해야할 때 다양한 개체 유형의 집합으로 구성된 워크로드를 실행할 수 있다. 특정 유형의 개체를 나열하면 문제의 원인을 식별하는데 도움이 된다. 

문제와 관련된 개체를 검색해야할 때 Unix `grep` 명령어로 개체를 필터링할 수 있다. 명령의 `-C` 옵션을 사용하여 `grep` 검색 전후의 상황별 구성을 렌더링할 수 있다.

```shell
# author=ithingv34와 관련된 위, 아래 10줄을 출력

$ kubectl describe pod | grep -C 10 "author=ithingv34"
```